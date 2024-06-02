export type availableType = 'docx' | 'pdf';
export const downloadFile = (type: availableType) => {
	const link = document.createElement('a');
	const fileName = `Resume.${type}`;
	link.href = `./files/${fileName}`;
	link.type =
		type === 'docx'
			? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			: 'application/pdf';
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
