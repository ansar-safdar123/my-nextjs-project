
'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Tabs({ tabs, initialKey, onChange }) {
	const containerRef = useRef(null)
	const activeRef = useRef(null)
	const [activeKey, setActiveKey] = useState(initialKey ?? tabs[0]?.key)
	const controls = useAnimation()

	useEffect(() => {
		if (!onChange) return
		onChange(activeKey)
	}, [activeKey, onChange])

	useEffect(() => {
		// Center the active tab whenever it changes
		const container = containerRef.current
		const active = activeRef.current
		if (!container || !active) return

		// Calculate the position to center the active tab
		const containerWidth = container.offsetWidth
		const activeLeft = active.offsetLeft
		const activeWidth = active.offsetWidth
		const scrollPosition = activeLeft - (containerWidth / 2) + (activeWidth / 2)

		container.scrollTo({ left: scrollPosition, behavior: 'smooth' })

		// Small "jerk" activation animation
		controls.start({ y: [0, -6, 0], transition: { duration: 0.25, times: [0, 0.5, 1] } })
	}, [activeKey, controls])

	const items = useMemo(() => tabs ?? [], [tabs])

	return (
		<div className="w-full overflow-hidden">
			<style jsx>{`
				.no-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
					cursor: grab;
				}
				.no-scrollbar:active {
					cursor: grabbing;
				}
				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.tab-active {
					background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%);
					background: linear-gradient(180deg, rgba(52, 42, 77, 0.2) 0%, rgba(10, 13, 34, 0.2) 100%);
					background: linear-gradient(180deg, #FFFFFF 0%, #E4B607 100%);
					background: #FFFFFF;
					background: #00000080;
					background: #2C3754;
					background: #3030304D;
					background: #7A7A7A;
					background: #2A2A2A0F;
					min-width: 200px;
				}
				.tab-inactive {
					backdrop-filter: blur(5.5px);
					-webkit-backdrop-filter: blur(5.5px);
					opacity: 0.6;
					min-width: 200px;
				}
				.tabs-container {
					display: flex;
					gap: 12px;
					padding: 8px 50vw 8px 4px;
				}
			`}</style>
			<div
				ref={containerRef}
				className="relative overflow-x-auto no-scrollbar font-vcr"
			>
				<div className="tabs-container">
					{items.map((tab) => {
						const isActive = tab.key === activeKey
						return (
							<button
								key={tab.key}
								onClick={() => setActiveKey(tab.key)}
								className={`shrink-0 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${isActive
										? 'tab-active'
										: 'tab-inactive font-teko'
									}`}
								ref={isActive ? activeRef : undefined}
							>
								<motion.span animate={isActive ? controls : undefined} className="text-2xl font-semibold">
									{tab.label}
								</motion.span>
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}