
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
    transition: "Vue-Toastification__slideBlurred",
  maxToasts: 20,
  newestOnTop: true,
position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
};

export function useToast(app) {
  app.use(Toast, options);
}
