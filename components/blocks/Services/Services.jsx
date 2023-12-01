import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Block({ block }) {
	const ourServices = block.main.collection.contents;
	console.log("block", block);

	return (
		<div className="w-full bg-white py-[20px] px-5">
			<div className="flex max-w-[1142px] mx-auto">
				<div className="grid w-full grid-cols-1 py-10 sm:grid-cols-2 lg:grid-cols-3">
					{ourServices.map((item, i) => (
						<div
							key={i}
							className="flex w-full px-7 py-10 items-center gap-10 border border-[#DBDBDB]"
						>
							<Image
								className="flex w-[60px] h-[49px] object-contain"
								src={item.data.main.image}
								width={60}
								height={49}
								alt="your business"
							/>
							<div className="flex flex-col w-full gap-3">
								<span className="text-[20px] text-secondary font-[700]">
									{item.data.main.title}
								</span>
								<span
									className="text-[16px] font-[600]"
									dangerouslySetInnerHTML={{
										__html: item.data.main.thumbnail_description,
									}}
								/>
								<Link
									href={item.route_url}
									className="text-[16px] font-[600] text-secondary"
								>
									<span>{item.data.main.link_label}</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
