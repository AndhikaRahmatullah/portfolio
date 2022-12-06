import { motion, AnimatePresence } from "framer-motion";

const BackToTop = ({ showIcon }) => {
	return (
		<AnimatePresence>
			{showIcon && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="">
					<a href="#">
						<img
							src="https://img.icons8.com/fluency/512/collapse-arrow.png"
							alt="back top"
							className="fixed right-4 bottom-4 z-30 w-[45px] rounded-full border-2 border-primary p-2 hover:animate-pulse md:w-[50px]"
						/>
					</a>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BackToTop;
