import React from 'react';
import CardEntry from '../CardEntry/CardEntry';

const CardList = ({ onViewButton, handleDelete, filteredDiary }) => {
    if (filteredDiary.length === 0) {
        return <div className='p-5 font-medium text-xl text-gray-700'>"Ops...No diaries found..."</div>;
    }
    return(
        <div>
            {
                filteredDiary.map((diary) => {
                    return(
                        <CardEntry
                            key={diary.id}
                            diary={diary}
                            onViewButton={() => onViewButton(diary)}
                            handleDelete={() => handleDelete(diary)}
                        />
                    )
                    
                })
            }
        </div>

    );
};

export default CardList;
