export { }

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Pagination {
    current_page: number,
    from: number,
    last_page: number,
    links: object[],
    path: string,
    per_page: number,
    to: number,
    total: number,
  }

  interface ApiResponse<T> {
    data: T[],
    meta?: Pagination,
  }
}