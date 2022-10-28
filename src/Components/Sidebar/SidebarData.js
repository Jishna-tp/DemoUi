import React from 'react'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Profile',
        path: '/Profile'
    },
    {
        title: 'Settings',
        path: '/Settings',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Venue',
                path: '/Settings/Venue'
            },
            {
                title: 'Department',
                path: '/Settings/Department'
            }
        ]
    }
]