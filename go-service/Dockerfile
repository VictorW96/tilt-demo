FROM golang:1.18 AS builder

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o /go-service

FROM alpine:latest
RUN apk --no-cache add ca-certificates

COPY --from=builder /go-service /go-service

EXPOSE 8081

CMD ["/go-service"]
