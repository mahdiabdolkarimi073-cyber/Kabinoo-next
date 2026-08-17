
import React, {ReactNode} from "react";
import {closeLastModal, showModal} from "@/utils/ui/modals";
import DynamicForm from "@/components/DynamicForm";
import {Autocomplete, Button, Textarea} from "@mantine/core";

export async function getInput(node: ReactNode | string, onOk?: (txt: string)=>void, data?: string[], textarea?: boolean): Promise<string> {
	const text = typeof node === 'string' ? node:"";
	return await new Promise((resolve, reject) => {
		showModal.open({
			title: text.slice(0,40),
			children: (

					<DynamicForm action={async j => {
						resolve(j.text as string)
						onOk?.(j.text as string)
						closeLastModal()
					}}>
						<div>
							{typeof node !== 'string' && node}
							{textarea ? (
								<Textarea
									autoFocus
									autosize
									defaultValue={data?.[0] || ""}
									radius={'xs'}
									label={text.slice(0,70)+"..."}
									name={'text'}
									className={'mb-2'}
								/>
							):(
								<Autocomplete
									autoFocus
									data={data || []}
									label={text.slice(0,70)+"..."}
									name={'text'}
									className={'mb-2'}
								/>
							)}
							<Button type={'submit'}>
								ثبت
							</Button>
						</div>
					</DynamicForm>

			),
			onClose: reject
		})
	})
}
