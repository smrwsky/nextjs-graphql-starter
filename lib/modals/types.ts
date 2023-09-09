export type ModalType = 'ConfirmModal' | 'PublishDraftMaterialModal';

export interface ModalPropsBase {
  visible?: boolean;
  onHide?: VoidFunction;
  onRemove?: VoidFunction;
}

export interface ModalContractBase<
  Type extends ModalType,
  Props extends ModalPropsBase = ModalPropsBase,
> {
  type: Type;
  props: Props;
}

interface ConfirmModalProps extends ModalPropsBase {
  cancelLabel?: string;
  closeLabel?: string;
  confirmLabel?: string;
  description: string;
  title?: string;
  variant?: 'primary' | 'danger' | 'warning' | 'success';
  onConfirm: () => void;
}

export type ConfirmModalContract = ModalContractBase<
  'ConfirmModal',
  ConfirmModalProps
>;

export type PublishMaterialModalContract =
  ModalContractBase<'PublishDraftMaterialModal'>;

export type AnyModalContract =
  | ConfirmModalContract
  | PublishMaterialModalContract;
