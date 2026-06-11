/*
 * Ollama4j - Java library for interacting with Ollama server.
 * Copyright (c) 2025 Amith Koujalgi and contributors.
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with the License.
 *
*/
package io.github.ollama4j.unittests.models.response;

import static org.junit.jupiter.api.Assertions.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.ollama4j.models.response.ListModelsResponse;
import io.github.ollama4j.models.response.Model;
import io.github.ollama4j.models.response.ModelDetail;
import io.github.ollama4j.models.response.ModelMeta;
import io.github.ollama4j.utils.Utils;
import java.time.OffsetDateTime;
import org.junit.jupiter.api.Test;

class TestModelClasses {

    @Test
    void testModel() {
        Model model = new Model();
        model.setName("test-model:latest");
        model.setModifiedAt(OffsetDateTime.now());
        model.setSize(1000L);
        model.setCapabilities(new String[] {"completion", "chat"});

        assertEquals("test-model:latest", model.getName());
        assertNotNull(model.getModifiedAt());
        assertEquals(1000L, model.getSize());
        assertEquals("test-model", model.getModelName());
        assertEquals("latest", model.getModelVersion());
        assertArrayEquals(new String[] {"completion", "chat"}, model.getCapabilities());
    }

    @Test
    void testModelDetail() {
        ModelDetail detail = new ModelDetail();
        detail.setModelFile("modelfile content");
        detail.setParameters("parameters");
        detail.setTemplate("template");
        detail.setLicense("MIT");

        assertEquals("modelfile content", detail.getModelFile());
        assertEquals("parameters", detail.getParameters());
        assertEquals("template", detail.getTemplate());
        assertEquals("MIT", detail.getLicense());
    }

    @Test
    void testModelMeta() {
        ModelMeta meta = new ModelMeta();
        meta.setFormat("gguf");
        meta.setFamily("llama");
        meta.setParameterSize("7B");

        assertEquals("gguf", meta.getFormat());
        assertEquals("llama", meta.getFamily());
        assertEquals("7B", meta.getParameterSize());
    }

    @Test
    void testModelWithCapabilitiesDeserialization() throws Exception {
        String json =
                """
                {
                  "models" : [ {
                    "name" : "tinyllama:latest",
                    "model" : "tinyllama:latest",
                    "modified_at" : "2026-06-10T22:47:32.360004068Z",
                    "size" : 637700138,
                    "digest" : "2644915ede352ea7bdfaff0bfac0be74c719d5d5202acb63a6fb095b52f394a4",
                    "details" : {
                      "parent_model" : "",
                      "format" : "gguf",
                      "family" : "llama",
                      "families" : [ "llama" ],
                      "parameter_size" : "1B",
                      "quantization_level" : "Q4_0",
                      "context_length" : 2048,
                      "embedding_length" : 2048
                    },
                    "capabilities" : [ "completion" ]
                  } ]
                }\
                """;

        ObjectMapper mapper = Utils.getObjectMapper();
        ListModelsResponse response = mapper.readValue(json, ListModelsResponse.class);

        assertNotNull(response.getModels());
        assertEquals(1, response.getModels().size());

        Model model = response.getModels().get(0);
        assertEquals("tinyllama:latest", model.getName());
        assertEquals(637700138L, model.getSize());
        assertNotNull(model.getCapabilities());
        assertEquals(1, model.getCapabilities().length);
        assertEquals("completion", model.getCapabilities()[0]);
    }
}
