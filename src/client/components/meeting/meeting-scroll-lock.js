/*
 * Copyright (C) 2015-2016 InSeven Limited.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import React from 'react';

export default class MeetingScrollLock extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.originalBodyOverflow = document.getElementsByTagName('body')[0].style.overflow;
        if (this.props.active) {
            this.applyAutoLockScrolling(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            this.applyAutoLockScrolling(nextProps);
        }
    }

    componentWillUnmount() {
        this.allowScrolling();
    }

    originalBodyOverflow = '';

    applyAutoLockScrolling(props) {
        if (props.active) {
            this.preventScrolling();
        } else {
            this.allowScrolling();
        }
    }

    preventScrolling() {
        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = 'hidden';
    }

    allowScrolling() {
        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = this.originalBodyOverflow || '';
    }

    render() {
        return (<div />);
    }

}
