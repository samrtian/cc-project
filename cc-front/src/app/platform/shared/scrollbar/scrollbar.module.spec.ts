import { ScrollbarModule } from './scrollbar.module';

describe('ScrollbarModule', () => {
  let scrollbarModule: ScrollbarModule;

  beforeEach(() => {
    scrollbarModule = new ScrollbarModule();
  });

  it('should create an instance', () => {
    expect(ScrollbarModule).toBeTruthy();
  });
});
