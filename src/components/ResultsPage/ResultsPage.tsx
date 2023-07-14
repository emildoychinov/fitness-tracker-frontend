import * as React from "react";
import { useEffect, useState } from 'react';

const ResultsPage = ({ search }: any) => {
    const [elements, setElements] = useState<{ id?: string, name?: string }[]>([]);
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const loadData = async () => {
            setSearchInput(search);
            const searchBody = {
                filteringOption: "name",
                filter: searchInput
            }
            try {
                const response = await fetch('/workouts/filter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(searchBody)
                })
    
                const data = await response.json()
                console.log('data',data);
                
                setElements(data)
                console.log('elements',elements);
                
            } catch (error) {
                return console.log(error);
            }
        }   
        loadData(); // Execute incrementCount on mount
    }, []);

    return (
        <div style={{backgroundColor: 'red', width: '100px', height: '100px'}}>
            {elements.map((element) => (
                <div key={element.id}>
                    {element.name}
                </div>
            ))}
        </div>
    );
};

export default ResultsPage;