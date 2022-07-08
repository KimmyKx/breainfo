declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_ACCESS_TOKEN: Secret,
      JWT_REFRESH_TOKEN: Secret,
      mongo: string,
      admins: array
    }
  }
}

export {}