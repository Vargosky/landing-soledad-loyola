import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield, HeartPulse, Landmark, Users, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { bio } from "@/components/data/data";
import { Container } from "@/components/ui/Container";
import { THEME } from "@/components/data/data";
import { passion, saira } from "@/components/data/data";



export function Issue({ icon: Icon, title, children }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition rounded-2xl border-black/5">
      <CardHeader>
        <CardTitle className={`${passion.className} flex items-center gap-3`}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: THEME.primary, color: "white" }}>
            <Icon size={20} />
          </span>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        {children}
      </CardContent>
    </Card>
  );
}