//import ToolTip from '../uiAceternity/Tooltip';

import { AnimatedTooltip } from "@/uiAceternity/Tooltip";

export default function Home() {
  const data = [{id: 1, name: 'manu', designation: 'Founder'}
  ]
  return (
    <div className="relative">
      <h1 className="text-red-300 text-bold">hi</h1>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={data} />
    </div>

    </div>
  );
}
