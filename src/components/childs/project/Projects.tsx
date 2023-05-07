"use client"
import { socialmedia } from "@/app/page";
import Link from "next/link";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { projects } from "@/assets/data/mock";
import ImgMediaCard from "@/components/elements/Itemcard";
const Projects = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div
      id="projects"
      className="flex w-full flex-col gap-36 justify-between min-h-full"
    >
      <div className="flex justify-center items-center gap-4 flex-col ">
        <h2 className=" text-6xl font-semibold">My Portfolio</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {projects.map(data=>(
            <Grid key={data.id} item xs={4}>
           <ImgMediaCard></ImgMediaCard>
          </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
