import React, { useEffect } from 'react';
import { useEngines } from '../stores/use_engines';


export function Greet() {
    const { wasmEngine } = useEngines()

    useEffect(() => {
        // Render each frame to a canvas element for Rust to see
        if (wasmEngine.instance) {
            wasmEngine.instance.greet()
        }
    }, [])

    return (
        <div>
            <p>You have 1 new message in your console.</p>
        </div>
    );
}