import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import '/assets/scss/toast.scss'

export default defineNuxtPlugin(() => {
	const toast = useToast({
		position: 'bottom-right',
		duration: 2300,
		dismissible: true,
		queue: true,
	});
	return {
		provide: { toast }
	}
});