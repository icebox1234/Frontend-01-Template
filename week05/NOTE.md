# 每周总结可以写在这里
## HTTP协议
- HTTP协议（Hyper Text Transfer Protocol，超文本传输协议）,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。
- HTTP基于TCP/IP通信协议来传递数据。
- HTTP基于客户端/服务端（C/S）架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。
- [HTTP 标准](https://tools.ietf.org/html/rfc2616)



## HTTP请求报文
> HTTP请求报文分为三个部分
- Request Line（请求行）
  - 内容
    - method
      - 常见的HTTP方法
        - GET
        - POST
        - HEAD
        - PUT
        - DELETE
        - CONNECT
        - OPTIONS
        - TRACE
    - path
    - protocol version
  - 注意事项
    - method、path、protocol version之间由空格符分割 
- headers（请求头）
  - HTTP的报文头，报文头包含若干个属性，格式为“属性名:属性值”，服务端据此获取客户端的信息。
  - 常见的headers
    - Accept
    - Accept-Encoding
    - Accept-Language
    - Cache-Control
    - Connection
    - Host
    - If-Modified-Since
    - If-None-Match
    - User-Agent
    - Cookie
  - 注意事项
    - 请求头内容的每一行由\r\n分割
- body（请求体）
  - 它承载多个请求参数的数据
  - 数据通过param1=value1&param2=value2的键值对形式编码成一个格式化串
- 注意事项
  - 请求头、请求行、请求体之间由\r\n分割
  - 请求头中每行由\r\n分割
  - 请求体每行由\r\n分割
- 例子
```
POST / HTTP/1.1(\r\n)
Host: 127.0.0.1(\r\n)
Content-Type: application/x-www-form-urlencode(\r\n)
(\r\n)
action=hi(\r\n)
(\r\n)
```

## HTTP响应报文
> HTTP响应报文也分为三个部分
- status line
  - 内容
    - protocol version
    - status code
      - 1xx：临时回应，表示客户端请继续。
      - 2xx：请求成功。
      - 3xx: 表示请求的目标有变化，希望客户端进一步处理。
      - 4xx：客户端请求错误。
      - 5xx：服务端请求错误。
    - status text
- heders
  - 常见的headers
    - Cache-Control
    - Connection
    - Content-Encoding
    - Content-Length
    - Content-Type
    - Date
    - ETag
    - Expires
    - Keep-Alive
    - Last-Modified
    - Server
    - Set-Cookie
    - Via
- body
- 注意事项
  - 响应头、响应行、响应体之间由\r\n分割
  - 响应头中每行由\r\n分割
  - 响应体每行由\r\n分割
- 例子
```
HTTP/1.1 200 OK(\r\n)
Content-Type: text\html(\r\n)
Date: Mon, 23 Dec 2019 06:46:19 GMT(\r\n)
Connection: keep-alive(\r\n)
Transfer-Encoding: chunked(\r\n)
(\r\n)
2(\r\n)
ok(\r\n)
(\r\n)
```
- 当Transfer-Encoding为chunked时的读取规则
  - 每一段内容分为2行，第一行为数字，表示内容长度，第二行为具体数据，数据长度为第一行说声明的长度
