export interface ReadableController<ResponseDto> {
  index(): Promise<ResponseDto[]>;
  get(slug: any): Promise<ResponseDto>;
}
