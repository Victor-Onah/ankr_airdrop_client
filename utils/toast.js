class Toast {
	DURATION = 4_000;

	constructor() {
		const toastsContainer = document.createElement("div");

		toastsContainer["classList"].add("toasts-container");
		document.body.appendChild(toastsContainer);

		this.container = toastsContainer;
	}

	success(message) {
		return this.#createToast('success', message)
	}

	error(message) {
		return this.#createToast('error', message)
	}

	warning(message) {
		return this.#createToast('warning', message)
	}

	#createToast(type, message) {
		const toastElem = document.createElement("div");
		const closeBtn = document.createElement("button");
		const toastId = Toast.#generateId()

		toastElem.textContent = message;
		toastElem.classList.add("toast", type);
		toastElem.id = toastId
		toastElem.style.opacity = 0
		toastElem.style.animation = 'animate-to-bottom 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards'

		this.container.appendChild(toastElem);

		setTimeout(() => toastElem.remove(), this.DURATION);

		return toastId
	}

	static #generateId() {
		const alphanumeric =
			"1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let id = ''

		for (let i = 0; i < 10; i++) {
			id += alphanumeric.charCodeAt(Math.floor(Math.random() * alphanumeric.length))
		}

		return id
	}
}

export default new Toast();
