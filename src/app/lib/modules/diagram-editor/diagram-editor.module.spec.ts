import { DiagramEditorModule } from './diagram-editor.module';

describe('DiagramEditorModule', () => {
  let diagramEditorModule: DiagramEditorModule;

  beforeEach(() => {
    diagramEditorModule = new DiagramEditorModule();
  });

  it('should create an instance', () => {
    expect(diagramEditorModule).toBeTruthy();
  });
});
