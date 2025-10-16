import { useState } from "react";
import { Upload, FileText, Receipt, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocumentScanner = () => {
  const [activeTab, setActiveTab] = useState("resume");

  const documentTypes = [
    { value: "resume", label: "Resume", icon: FileText },
    { value: "invoice", label: "Invoice", icon: Receipt },
    { value: "challan", label: "Delivery Challan", icon: Truck },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Scanner</CardTitle>
        <CardDescription>Select document type and upload your file for processing</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            {documentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <TabsTrigger key={type.value} value={type.value} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {type.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {documentTypes.map((type) => (
            <TabsContent key={type.value} value={type.value} className="mt-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Analyze {type.label.toLowerCase()}s and extract professional information
                </p>
                
                <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Upload {type.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag & drop your {type.label.toLowerCase()} here, or click to browse
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG
                  </p>
                  <Button className="mt-6">
                    <Upload className="mr-2 h-4 w-4" />
                    Browse Files
                  </Button>
                </div>
                
                <Button className="w-full" size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Scan {type.label}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DocumentScanner;
