import {ReactNode} from "react";

export async function askConfirm(text: ReactNode | string, onOk?: () => void | (() => Promise<void>)) {
	return await new Promise((resolve, reject) => {
		window.showModal.openConfirmModal({
			title: 'هشدار',
			children: typeof text === 'string' ? (
				<p className={'text-md font-semibold'}>{text}</p>
			):text,
			onConfirm: async () => {
				await onOk?.();
				resolve(true)
			},
			onClose: reject,
			onCancel: reject
		})
	})
}
