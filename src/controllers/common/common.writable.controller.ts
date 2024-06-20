export interface WritableController<ResponseDto, CreateDto, UpdateDto> {
  create(body: CreateDto): Promise<ResponseDto>;
  update(body: UpdateDto, slug: string): Promise<ResponseDto>;
  delete(slug: string): Promise<any>;
}
