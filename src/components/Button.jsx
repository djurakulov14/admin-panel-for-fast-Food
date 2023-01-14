const Button = (props) => {
	return (
		<button
			{...props}
			className="bg-[#DF6751] font-medium rounded-[43px] text-white hover:bg-[#202020] ease-in duration-300 py-[10px] px-[20px] max-md:py-[5px] max-md:px-[15px]"
		>
			{props.children}
		</button>
	);
};

export default Button;
