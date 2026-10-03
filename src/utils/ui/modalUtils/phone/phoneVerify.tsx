
import {Button, PinInput} from "@mantine/core";
import React from "react";
import {closeLastModal, showModal} from "@/utils/ui/modals";
import {initLoaderModal} from "@/utils/ui/modalUtils/loader";
import {isPhoneVerified, sendPhoneVerifyCode, verifyPhoneNumber} from "@/utils/ui/modalUtils/phone/action";
import DynamicForm from "@/components/DynamicForm";

export async function quickVerifyPhoneNumber(phone: number) {
	initLoaderModal("درحال ارسال کد");
	const verified = await isPhoneVerified(phone);
	if (verified) {
		closeLastModal();
		return true;
	}

	alert(await sendPhoneVerifyCode(phone));

	closeLastModal();

	return new Promise(async (r,reject) => {

		showModal.open({
			title: "تایید شماره تلفن",
			children: (
				<div>
					<p>کد تایید ارسال شده به شماره تلفن {phone} را وارد کنید</p>
					<Button onClick={async ()=>{
						alert(await sendPhoneVerifyCode(phone))
					}} size={'compact-sm'} color={'orange'}>
						ارسال مجدد
					</Button>

					<br/>
					<br/>
					<DynamicForm action={async json => {
						const check = await verifyPhoneNumber(phone, json.code);
						if (check === true) {
							r(true);
							closeLastModal();
						} else alert(check);
					}}>
						{state => (
							<div className={'flex flex-col gap-2'}>
								<PinInput
									name={'code'}
									length={6}
									oneTimeCode
								/>
								<div>
									<Button size={'sm'} type={'submit'}>
										تایید
									</Button>
								</div>
							</div>
						)}
					</DynamicForm>
				</div>
			),
			onClose: reject
		})
	})
}
