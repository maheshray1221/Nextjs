import React from 'react'
import Info from './Info';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <Info id={id} />
        </div>
    )
}
