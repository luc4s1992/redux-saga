import React from 'react';
import Modal from 'react-modal';

import './loading_modal.css'
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background              :'#282c34',
        padding                 :'0px',
        border                  :'0px',
    }
};

const tableHeader = [
    'id',
    'agent_key',
    'app',
    'cpu_system',
    'cpu_tot',
    'cpu_user',
    'down',
    'freemem',
    'hostname',
    'ip',
    'timestamp',
    'totalmem',
    'up',
    'usedmem'];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



const DataModal = (props) => {
    const {isLoading, tableData, setModalState} = props;

    function closeModal(){
        setIsOpen(false);
    }

    const classes = useStyles();

    const [modalIsOpen,setIsOpen] = React.useState(true);

    function closeModal(){

        setModalState(false);
    }

    return (
        <div>
            <Modal
                isOpen={isLoading}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{width: "100%", boxSizing: "border-box", padding: "20px"}}>
                    <TableContainer component={Paper} style={{}}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {tableHeader.map((row) => (
                                        <TableCell align={'center'}>{row}</TableCell>
                                    ))}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((rowData) => (
                                    <TableRow>
                                        {rowData.map((data) => (
                                            <TableCell align={'center'}>{data}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Modal>
        </div>
    );
}

export default DataModal;