import * as React from "react";
import { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import { getFromRoute } from "src/requests";

const Workouts = ({ match, history}: any) => {
    const [elements, setElements] = useState<{ id?: string, name?: string }[]>([]);
    const [searchInput, setSearchInput] = useState('')
    
    useEffect(() => {
        const loadData = async () => {
            setSearchInput(match.params.workout_id);
            console.log('searchInput:',match.params.workout_id);

            try {
                const response = await fetch(`/workout_exercises/findall/${match.params.workout_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + localStorage.getItem('API_KEY') || ''
                    },
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

    useEffect(() => {
        setSearchInput(match.params.search_text);
      }, [match.params.search_text]);

    return (
        <div style={{backgroundColor: 'red', width: '100px', height: '100px'}}>
            {elements.map((element) => (
                <div 
                    key={element.id}
                >
                    test
                </div>
            ))}
        </div>
    );
};

export default withRouter(Workouts);