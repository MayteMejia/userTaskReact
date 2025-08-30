import { AddIcCallOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  handleOpenCreateDialog: () => void;
}

export const UserHeader = ({ handleOpenCreateDialog }: Props) => {
  return <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h5" fontWeight={'bold'}>
        Gestión de usuarios
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcCallOutlined />}
        onClick={handleOpenCreateDialog}
        sx={{ borderRadius: 3 }}
      >
        Nuevo Usuario
      </Button>
    </Box>
  </>
}