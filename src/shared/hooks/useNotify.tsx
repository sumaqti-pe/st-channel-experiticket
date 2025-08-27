import toast from "react-hot-toast";
import {
  Info,
  OctagonAlert,
  TriangleAlert,
  Check,
  MessagesSquare,
} from "lucide-react";
import clsx from "clsx";

export const notify = {
  error: (message: string) =>
    toast.custom((t) => (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg px-2 py-3 shadow-lg transition-all",
          t.visible ? "animate-enter" : "animate-leave",
          "bg-[#EF4444] text-[#FFF7F7] flex gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <OctagonAlert className="w-6 h-6" />
          <p className="font-medium">{message}</p>
        </div>
        <p
          className="py-[10px] px-4 text-sm"
          onClick={() => toast.dismiss(t.id)}
        >
          Cerrar
        </p>
      </div>
    )),

  warning: (message: string) =>
    toast.custom((t) => (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg px-2 py-3 shadow-lg transition-all",
          t.visible ? "animate-enter" : "animate-leave",
          "bg-[#EBC100] text-[#3C3200] flex gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <TriangleAlert className="w-6 h-6" />
          <p className="font-medium">{message}</p>
        </div>
        <p
          className="py-[10px] px-4 text-sm"
          onClick={() => toast.dismiss(t.id)}
        >
          Cerrar
        </p>
      </div>
    )),
  success: (message: string) =>
    toast.custom((t) => (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg px-2 py-3 shadow-lg transition-all",
          t.visible ? "animate-enter" : "animate-leave",
          "bg-[#25B562] text-[#F5FCF8] flex gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <Check className="w-6 h-6" />
          <p className="font-medium">{message}</p>
        </div>
        <p
          className="py-[10px] px-4 text-sm"
          onClick={() => toast.dismiss(t.id)}
        >
          Cerrar
        </p>
      </div>
    )),
  neutral: (message: string) =>
    toast.custom((t) => (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg px-2 py-3 shadow-lg transition-all",
          t.visible ? "animate-enter" : "animate-leave",
          "bg-[#818282] text-[#F9F9FA] flex gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <MessagesSquare className="w-6 h-6" />
          <p className="font-medium">{message}</p>
        </div>
        <p
          className="py-[10px] px-4 text-sm"
          onClick={() => toast.dismiss(t.id)}
        >
          Cerrar
        </p>
      </div>
    )),
  info: (message: string) =>
    toast.custom((t) => (
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg px-2 py-3 shadow-lg transition-all",
          t.visible ? "animate-enter" : "animate-leave",
          "bg-[#067EFA] text-[#F5FBFF] flex gap-3"
        )}
      >
        <div className="flex items-center gap-3">
          <Info className="w-6 h-6" />
          <p className="font-medium">{message}</p>
        </div>
        <p
          className="py-[10px] px-4 text-sm"
          onClick={() => toast.dismiss(t.id)}
        >
          Cerrar
        </p>
      </div>
    )),
};
