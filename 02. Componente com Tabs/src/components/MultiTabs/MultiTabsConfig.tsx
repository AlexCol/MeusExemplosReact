import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { MarkDownEditComp } from '../MarkDownComponents/MarkDownEditComp';
import { MarkDownReader } from '../MarkDownComponents/MarkDownReader';
import { motion, AnimatePresence } from 'framer-motion';

export default function MultiTabsConfig() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="primary" indicatorColor="secondary">
            <Tab label="Edição" value="1" />
            <Tab label="Pré-Visualizar" value="2" />
          </TabList>
        </Box>

        <AnimatePresence mode="wait">
          {value === '1' && (
            <TabPanel value="1" key="edit">
              <motion.div
                key="edit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MarkDownEditComp />
              </motion.div>
            </TabPanel>
          )}

          {value === '2' && (
            <TabPanel value="2" key="preview">
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MarkDownReader />
              </motion.div>
            </TabPanel>
          )}
        </AnimatePresence>
      </TabContext>
    </Box>
  );
}

//!no exemplo acima empacota-se os TabPanel dentro de um AnimatePresence para permitir animações de entrada e saída ao trocar entre as abas.
/*exemplo anterior*/
/*
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor='primary' indicatorColor="secondary">
            <Tab label="Edição" value="1" />
            <Tab label="Pré-Visualizar" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><MarkDownEditComp/></TabPanel>
        <TabPanel value="2"><MarkDownReader /></TabPanel>
      </TabContext>
    </Box>
*/

{/*
! exemplo colorindo varias partes do formulario

    <div style={{background: 'yellow'}}>
      <Box sx={{ width: '100%', typography: 'body1' }}>        
        <TabContext value={value}>
          <div style={{background: 'lightblue'}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} textColor='primary' indicatorColor="secondary">
                <Tab label="Edição" value="1" />
                <Tab label="Pré-Visualizar" value="2" />
              </TabList>
            </Box>
          </div>
          <div style={{background: 'purple'}}>
          <TabPanel value="1"><MarkDownEditComp/></TabPanel>
          </div>
          <TabPanel value="2"><MarkDownReader /></TabPanel>
        </TabContext>
      </Box>
    </div>

*/}

