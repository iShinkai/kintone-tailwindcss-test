declare namespace kintone {
  interface Event {
    appId: number
    viewType: string
    viewId: number
    viewName: string
    records: Record[]
    offset: number
    size: number
    date: string
    type: string
  }

  interface Record {
    record: {
      $id: string
      [key?: string]: Field
    }
  }

  interface Field {
    type: string
    value: unknown
  }
}
