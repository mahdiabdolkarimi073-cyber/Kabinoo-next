import React from "react";
import generateRandomString from "@/utils/string";
import {showModal} from "@/utils/ui/modals";
import Loading from "@/no-side/Loading";

export function initLoaderModal(txt?: string) {
	const id = generateRandomString();
	showModal.open({
		id,
		title: null,
		children: (
			<Loading text={txt} />
		)
	});
	return id;
}
