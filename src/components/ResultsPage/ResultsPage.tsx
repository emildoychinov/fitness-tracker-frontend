import * as React from "react";
import { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { RouterPathEnum } from "src/enums/RouterPathEnum";

const ResultsPage = ({ match, history}: any) => {
    const [elements, setElements] = useState<{ id?: string, name?: string }[]>([]);
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const loadData = async () => {
            setSearchInput(match.params.search_text);
            console.log('huinqta',searchInput);
            const searchBody = {
                filteringOption: "name",
                filter: match.params.search_text
            }
            try {
                const response = await fetch('/workouts/filter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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
         return () => {
      // Cleanup function to cancel previous request
        console.log('Cleanup previous request');
        };
    }, [searchInput]);

    // useEffect(() => {
    //     setSearchInput(match.params.search_text);
    // }, [match.params.search_text]);

    return (
        <div style={{backgroundColor: 'red', width: '100px', height: '100px'}}>
            {elements.map((element) => (
                <div 
                    key={element.id}
                    onClick={() => {history.push(`${RouterPathEnum.WORKOUT.replace(':workout_id', element.id || '')}`);}}
                >
                    {element.name}
                </div>
            ))}
        </div>
    );
};

export default withRouter(ResultsPage);