# 通信

## 前置内容

### 单向通信

**不管是 Supervisor 还是 Worker，确认发出一段消息之后都会立即停止对该消息的处理流程，而不管对方是否成功接收。**

「单向通信」是 vNerve 容灾设计的一部分。不管是 Supervisor 还是 Worker，运行时的设备环境网络环境都是非常复杂的，一条简单的网络请求也有不小的可能性会请求失败。此时，因为有限流，物理网络波动等情况，就算是使用多种方法（如重试等）重新请求也并不能保证成功。除此之外，vNerve 还是一个不间断运行的服务，而不管是 Supervisor 还是 Worker 都瘫痪的可能性。这种情况下，如果发送方持续发送消息而又想确保对方收到消息的话，消息处理的性能消耗便会在短时间内急剧增加，且与运行时间成正相关。这是十分可怕的。为了应对这种情况，在 Supervisor 的设计中，每一个 Work 都是由多个 Worker 负责的。这样的设计极大地确保了 Supervisor 能够顺利接收到 Worker 发出的消息，而不管该条消息是由哪个 Worker 发出的；在 Supervisor 向 Worker 传递指令时若有失败的情况也可保证其他 Worker 的正常运行。因此「确保对方成功接收消息」是不必要的。

## 通信类型
