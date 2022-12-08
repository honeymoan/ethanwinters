import pino from "pino";

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport: {
    target: "pino-pretty",
    options: {
      ignore: "pid,hostname",
    },
  },
});

export default function getLogger() {
  return logger;
}
