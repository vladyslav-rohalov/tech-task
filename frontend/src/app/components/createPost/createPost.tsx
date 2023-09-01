import { useForm } from "react-hook-form";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Typography, FormControl, TextField, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IPost } from "@/app/utils/interfaces";

interface PropsTypes {
  handleComment: (formData: IPost) => void;
}

export default function CreatePost({ handleComment }: PropsTypes) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Accordion sx={{ width: "100%", mb: 4 }} defaultExpanded={false}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "primary.light" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ pl: 0 }}
      >
        <Typography sx={{ pl: 2 }}>Add post</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pl: 0 }}>
        <FormControl
          sx={{ display: "flex", width: "100%", pl: 2 }}
          component="form"
          onSubmit={handleSubmit(({ title, body }) => {
            handleComment({ title, body });
            reset();
          })}
        >
          <TextField
            required
            id="title"
            label="Title"
            sx={{ mt: 2 }}
            type="text"
            {...register("title")}
          />
          <TextField
            required
            id="body"
            label="Text"
            multiline
            inputProps={{
              style: {
                height: "100px",
              },
            }}
            sx={{
              mt: 2,
            }}
            type="text"
            {...register("body")}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, height: 48, bgcolor: "primary.light" }}
            type="submit"
          >
            new post
          </Button>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}
