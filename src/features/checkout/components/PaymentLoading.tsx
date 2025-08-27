export const PaymentLoading = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#ED1C24] rounded-full animate-spin"></div>

      <p className="mt-6 text-white font-bold text-2xl text-center">
        Te estamos redireccionando al pago
      </p>
      <p className="text-white text-lg font-bold mt-1">NO CIERRES ESTA VENTANA</p>
    </div>
  );
};
