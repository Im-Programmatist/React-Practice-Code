import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const GridComponent = (props) =>{

    const {noOfGrids, timerDelay} = props;
    const [grids, setGrids] = useState(Array(noOfGrids).fill(false)); 
    const [countDown, setCountDown] = useState( Array.from(
        { length:  noOfGrids},
        (value, index) => timerDelay
    ));// Array(noOfGrids).fill(timerDelay)
    
    const [checkIntervalCreationCount, setCheckIntervalCreationCount] = useState(0); 
    const [checkIntervalRemovalCount, setCheckIntervalRemovalCount] = useState(0); 

    const setTimerOnGrid = (event, index) => { 
        // Copy the grids state array
		const updatedGrids = [...grids];
		updatedGrids[index] = true; // Set the clicked grid to true
        if(countDown[index]>0){
            setGrids(updatedGrids); // Update the grids state
        }else{
            window.alert('timer end already');
        }
    }

    useEffect(() => {
		// Timer logic for each grid
		const interval = setInterval(() => {
            setCheckIntervalCreationCount(checkIntervalCreationCount+1);
			const updatedGrids = grids.map((grid, index) => {
				if (grid) {
                    console.log('in map useeffect grid', grid, '- of index -', index);
                    countDown[index] = countDown[index] -1;
                    setCountDown(countDown);
                    if(countDown[index] <= 0){
                        clearInterval(interval);
                        return grid - 1;
                    }
				}
				return grid;
			});
            // let checker = arr => arr.every(v => v === true);
            // console.log('checker(updatedGrids)', checker(updatedGrids), updatedGrids, updatedGrids.every(v => v === true));
            // if(checker(updatedGrids))
			    setGrids(updatedGrids); // Update the grids state so that it will call useEffect continuously until all grid false
		}, 1000);
		return () => { setCheckIntervalRemovalCount(checkIntervalRemovalCount+1); console.log('Removing Interval ', checkIntervalCreationCount);return clearInterval(interval);};
	}, [grids]);

    return (
        <>
            <label>Interval count {checkIntervalCreationCount}</label>
            <br/>
            <label>Interval removal count {checkIntervalRemovalCount}</label>
            <br/>
            <Grid container spacing={2}>
                {[...Array(noOfGrids)].map((x, i) =>
                    <Grid key={i} item xs={3}>
                        <Item  onClick={(e)=>{
                            setTimerOnGrid(e, i);
                        }}>                        
                        {` Grid No - ${i+1} With Counter Time ${countDown[i]} sec`} 
                       </Item>
                       <label>{ grids[i] ? `Timer: ${grids[i]}` : (countDown[i] === 0 )? "Timer ends" :"Click to start timer"}</label>
                    </Grid>
                )}                 
            </Grid>
        </>
    )
};

export default  GridComponent;