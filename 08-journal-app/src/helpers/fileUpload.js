export const fileUpload = async (file) => {
	const cloudUrl = "https://api.cloudinary.com/v1_1/da2dkzgcb/upload";
	const formData = new FormData();
	formData.append("upload_preset", "react-journal");
	formData.append("file", file);

	try {
		const resp = await fetch(cloudUrl, {
			method: "post",
			body: formData
		});

		if (resp.ok) {
			const cloudResp = await resp.json();
			return cloudResp.secure_url;
		} else {
			return null;
		}
	} catch (error) {
		throw error;
	}
	// return url de la imagen
};
