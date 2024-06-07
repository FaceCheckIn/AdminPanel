import axois, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export default class HttpService {
  private readonly baseURL: string
  private readonly ApiVersion: string
  private static _instance: AxiosInstance

  constructor() {
    this.baseURL = "http://192.168.92.242:8000/"
    this.ApiVersion = "api/v1/"
  }

  public static build() {
    if (!this._instance) {
      this._instance = axois.create({
        baseURL: "http://192.168.92.242:8000/",
        timeout: 30000,
      })
      this._instance.interceptors.response.use(function (response) {
        return response
      })
    }
    return new HttpService()
  }

  public setToken = (token: string) => {
    HttpService._instance.defaults.headers.common.Authorization = token
  }

  public get<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpService._instance.get(
      this.baseURL + this.ApiVersion + endpoint,
      config
    )
  }

  public post<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpService._instance.post(
      this.baseURL + this.ApiVersion + endpoint,
      data,
      config
    )
  }

  public put<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpService._instance.put(
      this.baseURL + this.ApiVersion + endpoint,
      data,
      config
    )
  }

  public patch<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpService._instance.patch(
      this.baseURL + this.ApiVersion + endpoint,
      data,
      config
    )
  }

  public delete<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpService._instance.delete(
      this.baseURL + this.ApiVersion + endpoint,
      config
    )
  }
}
