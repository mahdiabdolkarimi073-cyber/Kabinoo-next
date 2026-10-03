import {LoadingOverlay, Progress} from "@mantine/core";

const Loading = (props: {
	overlay?: boolean,
	text?: string
}) => {
	let {overlay, text = 'درحال بارگذاری'} = props;
	return (
		<div className={`${!props.overlay ? "min-h-[200px] relative":"absolute left-0 top-0 h-full"} w-full center flex-col`}>
			<LoadingOverlay
				visible
				overlayProps={{radius: 'sm', blur: 2, zIndex: 2}}
				loaderProps={{color: 'primary', type: 'bars', top: "-45px"}}
			/>
			<div className={'absolute top-0 mt-5 bottom-0 m-auto w-full center  flex-col max-w-[300px]'} style={{
				zIndex: "400"
			}}>
				<p className={'mb-1'}>{text}</p>
				<Progress radius="xl" size='md' value={100} className={'w-full'} color={'primary'} striped animated />
			</div>
		</div>
	);
};

export default Loading;
