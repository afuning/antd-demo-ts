declare namespace Ajax {

  // 请求接口数据
  export interface AjaxResponse {
    code: number,
    data: object | null | Array<any>,
    message: string
  }
}