import { toast } from "react-toastify";

class utils {
  static scrollToView(id: string) {
    if (typeof window !== "undefined") {
      const element: any = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop ? element.offsetTop : 0,
          behavior: "smooth",
        });
      }
    }
  }

  static getContent(content: any) {
    if (content) {
      return content;
    } else {
      return "N/A";
    }
  }

  static getLink(content: any) {
    if (content) {
      return content;
    } else {
      return "#";
    }
  }

  static showErrorMessage(message: string) {
    toast.error(message, {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static showSuccessMessage(message: string) {
    toast.success(message, {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export default utils;
