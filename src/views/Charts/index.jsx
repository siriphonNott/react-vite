import React from 'react'
import { Title } from '@/components/common'
import { Switch, Route, Link, useRouteMatch, Redirect, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toDown } from '@/helpers/pageTransition'

import {ClickEvents,
  Crazy,
  Doughnut,
  Dynamic,
  GroupedBar,
  HorizontalBar,
  Line,
  MultiAxisLine,
  MultiType,
  Pie,
  Polar,
  Radar,
  Scatter,
  StackedBar,
  VerticalBar
} from './types'

const chartTypes = [
  { name: 'ClickEvents', linkto: '/clickevents' },
  { name: 'Crazy', linkto: '/crazy' },
  { name: 'Line', linkto: '/line' },
  { name: 'Pie', linkto: '/pie' },
  { name: 'Radar', linkto: '/radar' },
  { name: 'Doughnut', linkto: '/doughnut' },
  { name: 'Polar', linkto: '/polar' },
  { name: 'Scatter', linkto: '/scatter' },
  { name: 'Dynamic', linkto: '/dynamic' },
  { name: 'GroupedBar', linkto: '/groupedbar' },
  { name: 'MultiType', linkto: '/multitype' },
  { name: 'HorizontalBar', linkto: '/horizontalbar' },
  { name: 'MultiAxisLine', linkto: '/multiaxisline' },
  { name: 'StackedBar', linkto: '/stackedbar' },
  { name: 'VerticalBar', linkto: '/verticalbar' },
];

export default function Charts() {
  const { url, path } = useRouteMatch()
  const { pathname } = useLocation()

  const ChartItem = ({ name, linkto }) => {
    const active = pathname.includes(linkto) ? 'bg-blue-100 font-semibold' : 'bg-blue-50'
    return (
      <Link to={ url + linkto }>
        <div className={`${active} hover:bg-blue-100 sm:p-4 p-2 rounded-lg sm:m-2 m-1 sm:text-md text-sm cursor-pointer text-gray-600 hover:text-gray-900 `}> 
          { name }
        </div>
      </Link>
    )
  }

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={toDown.variants}
      transition={toDown.transition}
    >
      <div>
        <Title title="Charts" />
        <div className="flex flex-wrap mb-4">
          { chartTypes.map((v) =>  <ChartItem key={v.name} name={v.name} linkto={v.linkto} />) }
        </div>
        <Switch>
          <Route path={`${path}/clickevents`} component={ClickEvents} />
          <Route path={`${path}/crazy`} component={Crazy} />
          <Route path={`${path}/doughnut`} component={Doughnut} />
          <Route path={`${path}/dynamic`} component={Dynamic} />
          <Route path={`${path}/groupedbar`} component={GroupedBar} />
          <Route path={`${path}/horizontalbar`} component={HorizontalBar} />
          <Route path={`${path}/line`} component={Line} />
          <Route path={`${path}/multiaxisline`} component={MultiAxisLine} />
          <Route path={`${path}/multitype`} component={MultiType} />
          <Route path={`${path}/pie`} component={Pie} />
          <Route path={`${path}/polar`} component={Polar} />
          <Route path={`${path}/radar`} component={Radar} />
          <Route path={`${path}/scatter`} component={Scatter} />
          <Route path={`${path}/stackedbar`} component={StackedBar} />
          <Route path={`${path}/verticalbar`} component={VerticalBar} />
          <Route path="*"><Redirect to={path} /> </Route>  
        </Switch>
      </div>
    </motion.div>
  )
}
