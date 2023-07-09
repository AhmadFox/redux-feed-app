import React from "react";

const IndicatorPostList = () => {
	return (
		<div className="w-full mb-4">
			<div className="animate-pulse grid gap-y-4">
				<div className="bg-slate-300 rounded-sm h-4 w-3/4"></div>
				<div className="flex gap-x-3">
					<div className="bg-slate-300 rounded-sm h-2 w-20"></div>
					<div className="bg-slate-300 rounded-sm h-2 w-20"></div>
				</div>
				<div className="grid gap-y-2">
					<div className="h-1 bg-slate-300 rounded-md w-full"></div>
					<div className="h-1 bg-slate-300 rounded-md w-full"></div>
					<div className="h-1 bg-slate-300 rounded-md w-full"></div>
					<div className="h-1 bg-slate-300 rounded-md w-full"></div>
					<div className="h-1 bg-slate-300 rounded-md w-full"></div>
				</div>
				<div className="flex gap-x-4">
					<div className="h-5 bg-slate-300 rounded-sm w-10"></div>
					<div className="h-5 bg-slate-300 rounded-sm w-10"></div>
					<div className="h-5 bg-slate-300 rounded-sm w-10"></div>
					<div className="h-5 bg-slate-300 rounded-sm w-10"></div>
				</div>
				<div className="h-5 bg-slate-300 rounded-sm w-24"></div>
			</div>
		</div>
	);
};

export default IndicatorPostList;
