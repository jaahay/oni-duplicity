export interface AbstractGeyserEditorProps {
  gameObjectId: number;
  children(props: AbstractGeyserEditorRenderProps): React.ReactChild;
}
export interface AbstractGeyserEditorRenderProps {
  geyserType: string | null;
  emitRate: number | null;
  emitIterationLength: number | null;
  emitIterationPercent: number | null;
  emitYearLength: number | null;
  emitYearPercent: number | null;
  onChangeEmitRate(value: number): void;
  onChangeGeyserType(type: string): void;
  onChangeEmitIterationLength(value: number): void;
  onChangeEmitIterationPercent(value: number): void;
  onChangeEmitYearLength(value: number): void;
  onChangeEmitYearPercent(value: number): void;
}
